export default {
    root:{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "30rem",
        overflowX: "hidden"
    },
    "@media only screen and (max-width: 700px)":{
        root:{
            width: "15rem"
        }
       
    }
}