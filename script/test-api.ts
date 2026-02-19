import axios from "axios";

async function testApi() {
    try {
        const res = await axios.post("http://localhost:5000/api/contacts", {
            name: "Test User",
            email: "test@example.com",
            phone: "1234567890",
            message: "Hello from test script"
        });
        console.log("Success:", res.status, res.data);
    } catch (error: any) {
        console.error("Error:", error.response?.status, error.response?.data || error.message);
    }
}

testApi();
