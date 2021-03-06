package gastronauts.waiter_app.Model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Objects;

public class Order implements Serializable {

    private String id;
    private String table;
    private String summaryPrice;
    private String status;

    private ArrayList<Meal> meals;

    public Order(String id, String table, String summaryPrice, String status, ArrayList<Meal> meals) {
        this.id = id;
        this.table = table;
        this.summaryPrice = summaryPrice;
        this.status = status;
        this.meals = meals;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTable() {
        return table;
    }

    public void setTable(String table) {
        this.table = table;
    }

    public String getSummaryPrice() {
        return summaryPrice;
    }

    public void setSummaryPrice(String summaryPrice) {
        this.summaryPrice = summaryPrice;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public ArrayList<Meal> getMeals() {
        return meals;
    }

    public void setMeals(ArrayList<Meal> meals) {
        this.meals = meals;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id='" + id + '\'' +
                ", table='" + table + '\'' +
                ", summaryPrice='" + summaryPrice + '\'' +
                ", status='" + status + '\'' +
                ", meals=" + meals +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Order order = (Order) o;
        return Objects.equals(id, order.id) &&
                Objects.equals(table, order.table) &&
                Objects.equals(summaryPrice, order.summaryPrice) &&
                Objects.equals(status, order.status);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, table, summaryPrice, status);
    }
}
