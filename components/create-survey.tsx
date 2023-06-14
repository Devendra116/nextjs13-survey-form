"use client";
import { useEffect } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { useRouter } from "next/navigation";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: false
};


export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
  const router = useRouter()
  useEffect(() => {
    const savedData = window.localStorage.getItem("survey-json");
    if (savedData) {
      creator.text = savedData;
    } else {
      creator.text = JSON.stringify({});
    }
  }, []);

  creator.saveSurveyFunc = (saveNo: any, callback: (arg0: any, arg1: boolean) => void) => {
    const savedSurveys = JSON.parse(window.localStorage.getItem("survey-list") || "[]");
    savedSurveys.push(JSON.parse(creator.text));
    window.localStorage.setItem("survey-list", JSON.stringify(savedSurveys));
    window.localStorage.setItem("survey-json", creator.text);
    window.localStorage.removeItem("survey-json");
    callback(saveNo, true);
    // window.location.href = "http://localhost:3000/view-surveys"; // Redirect to abc.com after saving
    router.push("http://localhost:3000/view-surveys")
  };

  return <SurveyCreatorComponent creator={creator} />;
}
