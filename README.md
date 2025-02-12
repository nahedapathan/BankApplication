# BankApplication
# **🏦 Banking Application**  

Welcome to the **Banking Application** – a full-stack **Spring Boot + Angular** project that simulates an online banking system. This project includes essential banking functionalities such as **customer and employee management, transactions, deposits, PIN updates, and secure authentication**.

---

## **📌 Features**
### **🚀 Admin Panel**
✅ Admin login authentication using **Spring Security**  
✅ **Add, View, Update & Delete Employees**  
✅ **Add, View, Update & Delete Customers**  

### **👨‍💼 Employee Panel**
✅ Employee login authentication  
✅ **Add new customer accounts**  
✅ **View and manage customer details**  

### **👤 Customer Panel**
✅ Customer login using **Account No & PIN**  
✅ **Deposit money into the account**  
✅ **Transfer funds between accounts**  
✅ **Check balance and account details**  
✅ **Update account PIN securely**  

---

## **📸 Project Screenshots**
| 🖼️ Screenshot | Description |
|--------------|-------------|
| ![Bank Screenshot 1](screenshots/bank1.png) | 
| ![Bank Screenshot 2](screenshots/bank2.png) |
| ![Bank Screenshot 3](screenshots/bank3.png) | 
| ![Bank Screenshot 4](screenshots/bank4.png) | 
| ![Bank Screenshot 5](screenshots/bank5.png) | 
| ![Bank Screenshot 6](screenshots/bank6.png) |
| ![Bank Screenshot 7](screenshots/bank7.png) | 
| ![Bank Screenshot 8](screenshots/bank8.png) |
| ![Bank Screenshot 9](screenshots/bankk1.png) | 
| ![Bank Screenshot 10](screenshots/bankk2.png) |
| ![Bank Screenshot 11](screenshots/bankk3.png) | 
| ![Bank Screenshot 12](screenshots/bankk4.png) |
| ![Bank Screenshot 13](screenshots/bankk5.png) | 
| ![Bank Screenshot 14](screenshots/bankk6.png) |
| ![Bank Screenshot 15](screenshots/bankk7.png) | 
| ![Bank Screenshot 16](screenshots/bankk8.png) | 

---

## **🛠️ Technologies Used**
### **🌐 Frontend (Angular)**
- **Angular 17**
- **TypeScript**
- **Bootstrap 5**
- **HTML5, CSS3**
- **Angular Routing**
  
### **🚀 Backend (Spring Boot)**
- **Spring Boot 3.2.5**
- **Spring Security (for authentication)**
- **Spring Data JPA (Hibernate)**
- **MySQL (Database)**
- **RESTful APIs**

---

## **💻 How to Run the Project**
### **1️⃣ Backend (Spring Boot) Setup**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/nahedapathan/Banking-Application.git
   ```
2. **Navigate to backend folder**:
   ```bash
   cd Banking-Application/backend
   ```
3. **Configure MySQL Database** in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/bank_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   ```
4. **Run the Spring Boot application**:
   ```bash
   mvn spring-boot:run
   ```

### **2️⃣ Frontend (Angular) Setup**
1. **Navigate to frontend folder**:
   ```bash
   cd ../frontend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the Angular application**:
   ```bash
   ng serve --open
   ```
4. **Open in Browser**: `http://localhost:4200`

---

## **🔐 Login Credentials**
| User Type | Username / Account No | Password / PIN |
|-----------|----------------------|---------------|
| **Admin** | `admin` | `admin123` |
| **Employee** | `johndoe` | `pass123` |
| **Customer** | `100001` | `1234` |

---

## **📢 Contributing**
💡 Found a bug or have a feature request? Feel free to **fork the repo**, create an issue, or submit a pull request!

---

## **📜 License**
This project is **free to use** for learning and educational purposes.

---

## **📞 Contact**

---

This **Banking System** provides a full-stack **Angular + Spring Boot** experience. Feel free to ⭐ **star** this repository and share your feedback! 🚀🔥
