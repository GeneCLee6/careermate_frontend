export function validateLogin(email, password) {
    if (!email || !password) {
        return "All fields are required";
    }
    if (!email.includes("@")) {
        return "Invalid email format";
    }
    if (password.length < 6) {
        return "Password must be at least 6 characters";
    }
    return null;
}

export function validateRegister(name, email, password, confirmPassword) {
    if (!name || !email || !password || !confirmPassword) {
        return "All fields are required";
    }
    if (!email.includes("@")) {
        return "Invalid email format";
    }
    if (password.length < 6) {
        return "Password must be at least 6 characters";
    }
    if (password !== confirmPassword) {
        return "Passwords do not match";
    }
    return null;
}
