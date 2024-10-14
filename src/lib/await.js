export default function awaitDelay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}