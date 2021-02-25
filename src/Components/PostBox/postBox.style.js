export default {
    root:{
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        margin: ".5rem 1rem",
        alignItems: "center",
        padding: "0px .5rem",
        width: "50%",
    },
    leftSpan:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    
    delete:{
        cursor: "pointer",
        "&:hover":{
            transform: "scale(1.2)",
            transition: "all .5s ease"
        }
    },
    "@media only screen and (max-width: 700px)":{
        root:{
            width: "100%"
        }
    }
}