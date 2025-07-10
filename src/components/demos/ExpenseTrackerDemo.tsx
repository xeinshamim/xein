import { DollarSign, TrendingUp, TrendingDown, Plus, Calendar, PieChart, BarChart3, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ExpenseTrackerDemo = () => {
  const [currentMonth] = useState("December 2024");
  
  const monthlyStats = {
    totalExpenses: 2456.78,
    totalIncome: 4200.00,
    budget: 3000.00,
    savings: 1743.22
  };

  const categories = [
    { name: "Food & Dining", amount: 456.78, budget: 600, color: "bg-red-500", percentage: 76 },
    { name: "Transportation", amount: 234.50, budget: 400, color: "bg-blue-500", percentage: 59 },
    { name: "Shopping", amount: 189.90, budget: 300, color: "bg-purple-500", percentage: 63 },
    { name: "Entertainment", amount: 145.60, budget: 200, color: "bg-green-500", percentage: 73 },
    { name: "Bills & Utilities", amount: 890.00, budget: 900, color: "bg-orange-500", percentage: 99 },
    { name: "Healthcare", amount: 120.00, budget: 150, color: "bg-pink-500", percentage: 80 },
  ];

  const recentTransactions = [
    { id: 1, description: "Grocery Store", category: "Food & Dining", amount: -67.89, date: "Dec 28", type: "expense" },
    { id: 2, description: "Salary", category: "Income", amount: 2100.00, date: "Dec 27", type: "income" },
    { id: 3, description: "Gas Station", category: "Transportation", amount: -45.20, date: "Dec 26", type: "expense" },
    { id: 4, description: "Netflix", category: "Entertainment", amount: -15.99, date: "Dec 25", type: "expense" },
    { id: 5, description: "Coffee Shop", category: "Food & Dining", amount: -8.50, date: "Dec 24", type: "expense" },
    { id: 6, description: "Freelance Work", category: "Income", amount: 350.00, date: "Dec 23", type: "income" },
  ];

  const budgetProgress = (monthlyStats.totalExpenses / monthlyStats.budget) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary">Expense Tracker</h1>
              <p className="text-muted-foreground">Track your spending and manage your budget</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                {currentMonth}
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Transaction
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Income</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">
                ${monthlyStats.totalIncome.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">
                ${monthlyStats.totalExpenses.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">-3.2% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Budget Progress</CardTitle>
              <BarChart3 className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{budgetProgress.toFixed(1)}%</div>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <div
                  className={`h-2 rounded-full ${budgetProgress > 100 ? 'bg-red-500' : 'bg-blue-500'}`}
                  style={{ width: `${Math.min(budgetProgress, 100)}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Savings</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">
                ${monthlyStats.savings.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">+8.7% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Categories Breakdown */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Spending by Category
              </CardTitle>
              <CardDescription>Budget vs actual spending this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded ${category.color}`} />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold">${category.amount}</span>
                        <span className="text-muted-foreground text-sm">/${category.budget}</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${category.color}`}
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {category.percentage}% of budget used
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common expense categories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Food & Dining", "Transportation", "Shopping", "Entertainment", "Bills", "Healthcare"].map((category, index) => (
                <Button key={index} variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Add {category}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Recent Transactions
            </CardTitle>
            <CardDescription>Your latest financial activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      transaction.type === "income" ? "bg-green-500" : "bg-red-500"
                    }`} />
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">{transaction.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.type === "income" ? "text-green-500" : "text-red-500"
                    }`}>
                      {transaction.type === "income" ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Transactions
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExpenseTrackerDemo;