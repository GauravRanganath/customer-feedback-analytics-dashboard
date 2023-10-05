const Feedback = ({ feedback }) => {
  const userInitial = feedback.firstName.charAt(0).toUpperCase();
  return (
    <div className="bg-white rounded-lg p-4 shadow mb-4 mx-4">
      <div className="flex gap-4">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-900 font-semibold text-xl pr-10">
          <span className="pl-10">{userInitial}</span>
          
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {feedback.firstName} {feedback.lastName} <span>&#183;</span>{" "}
            {feedback.company}
          </h3>
          <div className="flex">
            <p className="text-zinc-500 pr-5">{feedback.email} <span>&#183;</span> {feedback.phoneNumber}</p>
          </div>
          <div>
            <div className="flex py-3">
              <p className="text-gray-800 pr-5">
                Rating: {feedback.experience}
              </p>
              <p className="text-gray-800 pr-5">
                CAM: {feedback.acquisitionType}
              </p>
              <p className="text-gray-800">
                Interaction Type: {feedback.interactionType}
              </p>
            </div>
            <p className="text-gray-800">{feedback.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
