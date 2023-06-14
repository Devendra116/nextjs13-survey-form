import { SurveyCreatorWidget } from "@/components/create-survey"
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-2 h-full px-2 pr-2 bg-gradient-to-br from-blue-500 to-white">
       <SurveyCreatorWidget></SurveyCreatorWidget>
     </div>
  )
}
