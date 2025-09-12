using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;

public class PasswordHasher
{
    public static string HashPassword(string password)
    {
        byte[] salt = RandomNumberGenerator.GetBytes(128 / 8); 

        string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: password,
            salt: salt,
            prf: KeyDerivationPrf.HMACSHA256,
            iterationCount: 100000,
            numBytesRequested: 256 / 8));

        return $"{Convert.ToBase64String(salt)}.{hashed}";
    }
    public static bool VerifyPassword(string enteredPassword, string storedHash)
    {
        
        string[] parts = storedHash.Split('.');
        if (parts.Length != 2)
        {
            return false;
        }

        byte[] salt = Convert.FromBase64String(parts[0]);
        string actualHash = parts[1];

        string enteredPasswordHashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: enteredPassword,
            salt: salt,
            prf: KeyDerivationPrf.HMACSHA256,
            iterationCount: 100000,
            numBytesRequested: 256 / 8));

        return enteredPasswordHashed == actualHash;
    }
}