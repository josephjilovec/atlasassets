from uuid import uuid4
from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI(title="Atlas Assets Service", version="0.1.0")

class ScenarioRequest(BaseModel):
    residence_jurisdiction: str = Field(min_length=2, max_length=100)
    operating_jurisdictions: list[str] = Field(min_length=1, max_length=20)
    asset_type: str = Field(min_length=2, max_length=80)
    has_digital_assets: bool = False
    uses_third_party_custody: bool = False
    has_cross_border_ip: bool = False

@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}

@app.post("/v1/scenarios/classify")
def classify_scenario(payload: ScenarioRequest) -> dict[str, object]:
    # This service identifies review categories only. It does not recommend a
    # jurisdiction, execute transactions, move assets, or replace professional advice.
    review_categories: list[str] = ["tax", "entity-governance", "banking"]

    if payload.has_digital_assets:
        review_categories.extend(["digital-asset-classification", "sanctions-screening"])
    if payload.uses_third_party_custody:
        review_categories.append("custody-provider-review")
    if payload.has_cross_border_ip:
        review_categories.extend(["intellectual-property", "related-party-flows"])
    if len(set(payload.operating_jurisdictions)) > 1:
        review_categories.append("multi-jurisdiction-reporting")

    return {
        "scenario_id": str(uuid4()),
        "status": "review-required",
        "review_categories": sorted(set(review_categories))
    }
