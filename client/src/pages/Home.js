import Feedback from "../components/Feedback";
import SearchFeedback from "../components/SearchFeedback";
import { Analytics } from "../components/Analytics";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeedbackDataThunk } from "../features/feedback/feedbackSlice";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.feedback.value);
  const feedbackData = data.feedbackData;
  const feedbackStatistics = data.feedbackStatistics;

  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("firstName");

  const handleInputValueChange = (value) => {
    setInputValue(value);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const selectOptions = [
    { label: "Last Name", value: "lastName" },
    { label: "First Name", value: "firstName" },
    { label: "Email", value: "email" },
    { label: "Phone #", value: "phoneNumber" },
    { label: "Interaction Type", value: "interactionType" },
    { label: "Acquisition Method", value: "acquisitionType" },
    { label: "Feedback", value: "comment" },
    { label: "Experience", value: "experience" },
    { label: "Company", value: "company" },
  ];

  useEffect(() => {
    dispatch(getFeedbackDataThunk());
  }, [dispatch]);

  return (
    <Sidebar>
      <div className="grid grid-cols-4">
        {feedbackData && feedbackData.length > 0 ? (
          <div className="col-span-3">
            <div className="p-4 flex">
              <SearchFeedback onInputChange={handleInputValueChange} />
              <select
                id="location"
                name="location"
                className="block w-1/4 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-950 sm:text-sm sm:leading-6"
                defaultValue="Canada"
                value={selectedValue} // Set the value attribute to the state variable
                onChange={handleSelectChange} // Call the event handler on change
              >
                {selectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {feedbackData
              .filter((feedbackInfo) =>
                Object.values(feedbackInfo).some((value) =>
                  feedbackInfo[selectedValue]
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
                )
              )
              .map((feedbackInfo) => (
                <Feedback key={feedbackInfo.id} feedback={feedbackInfo} />
              ))}
          </div>
        ) : (
          <div className="col-span-3">No feedback data available.</div>
        )}
        <div className="col-span-1">
          {feedbackStatistics ? (
            <Analytics />
          ) : (
            <div>Loading feedback statistics...</div>
          )}
        </div>
      </div>
    </Sidebar>
  );
};

export default Home;
