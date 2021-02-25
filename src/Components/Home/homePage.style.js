export default {
    root:{
        display: "grid",
        gridTemplateColumns: ".3fr 1.7fr",
        height: "90vh"
    },
    sidebar:{
        // width: "10rem",
        background: "#08375b"
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
        height: "67vh",
        overflowY: "scroll",
        background: "lightgray"
    },

    form:{
        flexGrow: "1"
    }
}