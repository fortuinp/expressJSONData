import express from 'express'

//express app
const app =express()

//router
const router=express.Router()

//port
const port= +process.env.PORT || 4000

//JSON URL
const dataURL= 'https://fortuinp.github.io/todayPortfolioData/data/'

//Application middleware
app.use(
    router
)

// / => home

router.get('^/$|ejd',(req,res)=>{
res.json({
    status:res.statusCode,
    msg: 'you\'re ekhaya'
})
})

// /education
router.get('/education', async(req,res)=>{
    //let res=await fetch(dataURL).json() --- long approach
    // let {education} =await res
let {education}=await(await fetch
    (dataURL)).json()
    res.json({
        status:res.statusCode,
        education
    })
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
}
)