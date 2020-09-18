f=open("complete","r")
dict={}
for line in f:
    data=line.rstrip("\n").split(",")
    state=data[1]
    conf=data[4]
    recv=data[5]
    death=data[6]
    if (state not in dict):
        dict[state] ={"State": state, "Confrimed": conf, "Recovered": recv, "Death": death}
    else:
        dict[state] ={"State": state, "Confrimed": conf, "Recovered": recv, "Death": death}
print(dict)
def fetchData(**kwargs):
    state=kwargs["state"]

    if state not in dict:
        print("No State")
    else:
        print("Confrimed Cases:",dict[state]["Confrimed"])
def fetchData1(**kwargs):
    state=kwargs["state"]
    prop=kwargs["prop"]

    if state not in dict:
        print("No State")
    else:
        print(prop,"Cases",dict[state][prop])

fetchData(state="Kerala")
fetchData1(state="Delhi",prop="Recovered")
