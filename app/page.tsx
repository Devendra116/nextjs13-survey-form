import Link from "next/link";
import Head from "next/head";

const SurveyPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Survey Page</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-white">
        <div className="container mx-auto py-10">
          <h1 className="text-4xl font-bold mb-6 text-center">Survey Page</h1>

          <div className="flex justify-center space-x-4">
            <Link href="/create-survey" className="py-2 px-4 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                Create Survey
            </Link>

            <Link href="/view-surveys" className="py-2 px-4 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                View Surveys
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurveyPage;

