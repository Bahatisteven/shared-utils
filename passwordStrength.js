function calculatePasswordStrength(password) {
  let score = 0;
  let label = "Weak";
  let color = "bg-red-500";
  let isValid = false;

  if (!password) return { score, label, color, isValid };

  // check for each requirement if is met or not
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z\d]/.test(password)) score++;

  // validation of password isValid based on backend rule
  isValid =
    password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    /[^A-Za-z\d]/.test(password);

  if (score === 5) {
    label = "Strong";
    color = "bg-green-500";
  } else if (score >= 3) {
    label = "Medium";
    color = "bg-yellow-500";
  }

  return { score, label, color, isValid };
}

export default calculatePasswordStrength;