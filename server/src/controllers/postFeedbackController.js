const { db } = require("../config/firebaseConfig");

async function postData(req, response) {
  console.log(req.body);
  try {
    const docRef = await db.collection("customer-feedback").add(req.body);

    response.json({
      message: "Data posted successfully",
      documentId: docRef.id,
    });
  } catch (error) {
    console.error("Error posting data:", error);
    response
      .status(500)
      .json({ error: "An error occurred while posting data" });
  }
}

module.exports = { postData };
