export default {
    // "@global":{
    //     removeBtn: {
    //         marginRight: 0.5
    //       },
          
    //       itemEnter :{
    //         opacity: 0
    //       },
    //       itemEnterActive :{
    //         opacity: 1,
    //         transition: "opacity 500ms ease-in"
    //       },
    //       itemExit: {
    //         opacity: 1
    //       },
    //       itemExitActive: {
    //         opacity: 0,
    //         transition: "opacity 500ms ease-in"
    //       }
          
    // },
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
    rightSpan:{
        display: "flex",
        
        justifyContent: "space-between",
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
