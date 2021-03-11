export default {
    root:{
        display: "grid",
        gridTemplateColumns: ".3fr 1.7fr",
        height: "90%",
       
    },
    sidebar:{
        // width: "10rem",
        background: "#08375b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "90vh"
        
    },
    mainbar:{
        display: "flex",
        flexDirection: "column",
        
        
    },
    title:{
        // height: "10vh",
        display: "flex",
        // margin: ".5rem 1rem",
        alignItems: "center",
        padding: "0px .5rem",
        height: "12vh",
        background: "#265b8b",
        color: "#fff"
    },
    posts:{
        height: "78vh",
        overflowY: "scroll",
        background: "lightgray",
        "&::-webkit-scrollbar": {
            width: "1em"
          }
    },

    form:{
        flexGrow: "1"
    }
}

// body::-webkit-scrollbar {
//     width: 0em;
//   }
   
//   body::-webkit-scrollbar-track {
//     box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
//   }
   
//   body::-webkit-scrollbar-thumb {
//     background-color: white;
//     outline: 1px solid white;
//   }