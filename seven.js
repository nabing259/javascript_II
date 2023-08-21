let generateOtp = () =>{
    const otp = Math.floor(Math.random()*(9999-1000+1))+1000;
    return otp;
};

console.log(`Here is your otp: ${generateOtp()}`);