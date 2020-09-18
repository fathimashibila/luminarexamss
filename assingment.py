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
    if "param" not in kwargs:
        state=kwargs["state"]
        if state not in dict:
            print("No State")
        else:
            print("Confrimed Cases in",state,":", dict[state]["Confrimed"])
    if "param" in kwargs:
        state = kwargs["state"]
        param=kwargs["param"]
        if state not in dict:
            print("No State")
        else:
            print(param, "Cases in",state,":", dict[state][param])

fetchData(state="Kerala")
fetchData(state="Kerala",param="Recovered")
fetchData(state="Kerala",param="Death")

