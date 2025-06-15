class Circle():

    pi = 3.142 

    def __init__(self, radius):
        self.radius = radius
    
    def cal_area(self):
        self.cal_area = Circle.pi * self.radius * self.radius
        print(self.cal_area)

circle1 = Circle(2)
circle1.cal_area()