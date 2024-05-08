export const fetchUserData = async (endpoint,n) => {
    try {
        console.log(endpoint , n);
        const response = await fetch(`https://reqres.in/api/${endpoint}?page=${n}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};

export const getUsers = ()=>{
   console.log("cals");
}