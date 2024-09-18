import { CompanyValuesComponent } from "../CompanyValuesComponent"


export const QuizGameLanding = () => {
  return (
    <div className="bg-white px-4 py-4 max-w-5xl">
      <div className="relative flex items-center justify-center min-h-screen">

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute inset-0 bg-blue-900 opacity-90 rounded-2xl">
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, transparent 20%, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.1) 80%, transparent 80%)',
              backgroundSize: '50px 50px',
              opacity: 0.3,
            }} className="absolute inset-0"></div>
          </div>

          <button className="absolute top-2 right-2 text-white text-lg bg-red-700 border-4 border-[#009CB6] text-white rounded-full w-8 h-8">✖</button>

          <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="font-bold text-blue-900">EQH</span>
            </div>
          </div>


          <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="font-bold text-blue-900">EQH</span>
            </div>
          </div>
        </div>


        <div className="absolute z-10 bg-[#009CB6] text-white rounded-lg shadow-lg p-6 max-w-md w-full">

          <div className="bg-pink-600 rounded-t-lg py-2 text-center font-bold border-4 border-[#009CB6]">
            UNITY IN DIVERSITY QUIZ GAME
          </div>

          <CompanyValuesComponent/>

          <div className="flex items-center justify-center mt-4 space-x-4">
            <div className="flex items-center space-x-1">
              <span className="inline-block w-6 h-6 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold">👤</span>
              <span className="text-lg">1</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="inline-block w-6 h-6 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold">⏱</span>
              <span className="text-lg">30s</span>
            </div>
          </div>



        </div>
      </div>

    </div>
  );
};
