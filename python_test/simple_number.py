from datetime import datetime
import time

start_time = datetime.now()


def get_prime(n):
    counter = []

    def is_simple(num):
        for i in range(2, num):
            if num % i == 0:
                return False
        return True

    for j in range(2, n + 1):
        if is_simple(j):
            counter.append(j)

    return counter


lst_num = get_prime(int(input("Input number: ")))

print(f'Список простых чисел {lst_num}')
print(datetime.now() - start_time)

