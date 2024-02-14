interface User{
    email : string,
    userId : number,
    googleId? : string
    startTrail : () => string,
    getCoupon(couponname: number): number
}

const Aditya : User = {
    email : "fiwio",
    userId : 22114,
    startTrail: () => {
        return "trail started"
    },
    getCoupon : (couponname : 20) => {
        return 10 + couponname;
    }
}