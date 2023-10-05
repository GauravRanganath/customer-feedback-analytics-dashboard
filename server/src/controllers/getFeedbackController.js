const { db } = require("../config/firebaseConfig");

const calculateFeedbackStatistics = (feedbackData) => {
  const totalRatings = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  const interactionTypes = {
    Client: 0,
    "Potential Client": 0,
    "Industry Partner": 0,
    Other: 0,
  };

  const acquisitionTypes = {
    Website: 0,
    "Social Media": 0,
    Referral: 0,
    Traditional: 0,
    Other: 0,
  };

  feedbackData.forEach((feedback) => {
    const rating = parseInt(feedback.experience);
    const interactionType = feedback.interactionType;
    const acquisitionType = feedback.acquisitionType;

    if (!isNaN(rating) && rating >= 1 && rating <= 5) {
      totalRatings[rating.toString()]++;
    }

    if (interactionType && interactionTypes.hasOwnProperty(interactionType)) {
      interactionTypes[interactionType]++;
    }

    if (acquisitionType && acquisitionTypes.hasOwnProperty(acquisitionType)) {
      acquisitionTypes[acquisitionType]++;
    }
  });

  console.log(interactionTypes);

  return {
    totalRatings,
    interactionTypes,
    acquisitionTypes,
  };
};

const getData = async (req, res) => {
  try {
    const collectionRef = db.collection("customer-feedback");
    const snapshot = await collectionRef.get();

    const feedbackData = [];
    snapshot.forEach((doc) => {
      feedbackData.push(doc.data());
    });

    const feedbackStatistics = calculateFeedbackStatistics(feedbackData);

    console.log(feedbackStatistics);

    res.json({
      feedbackData: feedbackData,
      feedbackStatistics: feedbackStatistics,
    });
  } catch (error) {
    console.error("Error retrieving documents:", error);
    res.status(500).json({ error: "An error occurred while retrieving data." });
  }
};

module.exports = { getData };
