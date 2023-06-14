"use client";

import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Survey {
    title: string;
    pages: any[];
}

const ViewSurveysPage: React.FC = () => {
    const [surveys, setSurveys] = useState<Survey[]>([]);

    useEffect(() => {
        const savedSurveys = JSON.parse(window.localStorage.getItem("survey-list") || "[]") as Survey[];
        setSurveys(savedSurveys);
        console.log("herere ", surveys)
    }, []);

    return (
        <>
            <main>
                 
                <div className="container mx-auto py-10 bg-to-br from-blue-500 to-white ">
                   
                    <h1 className="text-4xl font-bold mb-6 text-white text-center">View Surveys</h1>
                    {(surveys && surveys.length==0) ? (<div className="text-center">Please First Create Survey, You Don't have any survey to show</div>):(null)}
                    <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
                       
                        {surveys && surveys.map((survey, index) => (
                            <div className="p-4 m-3 bg-gray-200 rounded shadow" key={index}>
                                <h2 className="text-lg font-bold mb-2">{survey.title}</h2>
                                <Link className="text-blue-500" href={`/view-surveys/${index}`} passHref>
                                    Open Survey
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

        </>
    );
};

export default ViewSurveysPage;
