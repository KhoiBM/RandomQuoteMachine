export default async function randomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random')
        const data = await response.json()

        console.log(`${data.content} —${data.author}`);

        return data;
    } catch (error) {
        console.log("something went wrong");
    }
}