// for loading of data which is then shared with +page
export async function load({ fetch }) {
    const res = await fetch('https://api.data.gov.sg/v1/transport/taxi-availability');
    const item = await res.json();

    return { item }
}