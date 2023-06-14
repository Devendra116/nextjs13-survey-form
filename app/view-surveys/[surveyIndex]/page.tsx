"use client";
import React, { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { FC } from "react";
import Link from "next/link";

interface SurveyProps {
    params: { surveyIndex: string }
}

const survey: FC<SurveyProps> = ({ params }) => {
    const [currentSurvey, setCurrentSurvey] = useState<any>(null)
    useEffect(() => {
        const savedSurveys: any[] = JSON.parse(window.localStorage.getItem("survey-list") || "[]") as Survey[];
        const currentsurvey = savedSurveys[parseInt(params.surveyIndex)]
        setCurrentSurvey(currentsurvey)
    }, []);

    const survey = new Model(currentSurvey);

    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-blue-500 to-white">
             <div className="flex justify-center items-center mb-4">
                        <Link href="/view-surveys" passHref>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Back
                            </button>
                        </Link>
                    </div>
            <Survey model={survey} />
        </div>
    )

}

export default survey