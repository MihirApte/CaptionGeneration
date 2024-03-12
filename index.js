const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require('openai');



const openai = new OpenAI({ 
  apiKey: "Your_API_KEY", 
});

//server setup
const app = express();
app.use(bodyParser.json());
app.use(cors());


//endpoint for chatgpt
app.post('/chat',async(req,res)=>{
    
    const userPrompt=req.body.userPrompt;
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": userPrompt}],
        max_tokens:100
    }) 
    console.log(response.choices[0].message.content)
    res.send(response.choices[0].message.content)
    
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});

