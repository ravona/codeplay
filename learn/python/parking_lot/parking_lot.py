test1 = {"E": "10:00", "L" : "13:21"} # 30
test2 = {"E": "09:42", "L" : "11:42"} # 9

# The entrance fee of the car parking lot is 2;
# The first full or partial hour costs 3;
# Each successive full or partial hour (after the first) costs 4.

def solution(E, L):
    # parse time
    E = E.split(":")
    L = L.split(":")
    print(E[0], E[1])
    print(L[0], L[1])

    # calculate parking duration
    parking_duration = {
        "hours": int(L[0]) - int(E[0]),
        "minutes": int(L[1]) - int(E[1])
    }

    print('parking_duation: ', parking_duration)

    # calculate parking fee
    

# solution(test1["E"], test1["L"])

solution(test2["E"], test2["L"])