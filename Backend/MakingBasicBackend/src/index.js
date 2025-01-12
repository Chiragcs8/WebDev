import mongoosen from "mongoose";

( async () => {
    try {
        mongoosen.connect(`${}`)
    } catch (error) {
        console.error("ERROR: ", error);
        throw error
    }
})