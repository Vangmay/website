import matplotlib.pyplot as plt
plt.style.use('fivethirtyeight')
x = ['Python','Html And CSS','Javascript']
y = [70,75,50]
plt.bar(x,y)
plt.title('My skils in programming')
plt.savefig('graph1.png',transparent = True)