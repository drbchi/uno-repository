def bisection_method(f, a, b, tol):
    if f(a) * f(b) >= 0:
        return None

    while (b - a) / 2 > tol:
        midpoint = (a + b) / 2
        if f(midpoint) == 0:
            return midpoint
        elif f(a) * f(midpoint) < 0:
            b = midpoint
        else:
            a = midpoint

    return (a + b) / 2

def function_to_solve(x):
    return x**3 - 4*x**2 - 7

a = float(input("Enter the start of the interval (a): "))
b = float(input("Enter the end of the interval (b): "))
tolerance = float(input("Enter the tolerance: "))

root = bisection_method(function_to_solve, a, b, tolerance)

if root is not None:
    print(f"The root is approximately: {root}")
else:
    print("Bisection method fails. No root found in the given interval.")
