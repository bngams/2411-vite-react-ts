describe("Login and Logout functionality", () => {
    beforeEach(() => {
      // Ensure starting from a clean state
      cy.clearLocalStorage();
      cy.visit("/auth"); // Navigate to the login page
    });
  
    it("should display the login form", () => {
      cy.get("form").should("exist");
      cy.get("input[type=email]").should("be.visible");
      cy.get("input[type=password]").should("be.visible");
      cy.get("button[type=submit]").contains("Login").should("be.visible");
    });
  
    it("should log in with valid credentials", () => {
      // Enter email and password
      cy.get("input[type=email]").type("test@example.com");
      cy.get("input[type=password]").type("password123");
  
      // Submit the form
      cy.get("button[type=submit]").click();
  
      // Verify localStorage is updated with token
      cy.window().then((window) => {
        expect(window.localStorage.getItem("token")).to.eq("12345");
      });
  
      // Verify the header shows Logout link
      cy.get("header").contains("Logout").should("be.visible");
    });
  
    it("should log out successfully", () => {
      // Log in first
      cy.get("input[type=email]").type("test@example.com");
      cy.get("input[type=password]").type("password123");
      cy.get("button[type=submit]").click();
  
      // Click the Logout link
      cy.get("header").contains("Logout").click();
  
      // Verify localStorage is cleared
      cy.window().then((window) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(window.localStorage.getItem("token")).to.be.null;
      });
  
      // Verify the header shows Login link again
      cy.get("header").contains("Login").should("be.visible");
    });
  });
  