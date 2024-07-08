import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { Subscription } from "rxjs";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Product List!';
    imageWidth = 50;
    imageMargin = 2;
    showImage: boolean = false;
    errorMessage:string='';
    sub!:Subscription;

    private _listFilter:string="";
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        console.log("In setter:",value);
        this.filteredProducts=this.performFilter(value);
    }
    //Encapsulation and Control: 
    //Executing Additional Logic
    //Debugging and Logging 

    filteredProducts:IProduct[] = [];
    products: IProduct[] = [];

    constructor(private productService: ProductService) {

    }

    //filters our list of products to only those with a product name that includes list filter string.
    //If the list filter string is empty, it returns all products
    performFilter(filterBy:string):IProduct[]{ //string parameter "-" in our case, returns an array of products that adhere to IProduct interface
        filterBy=filterBy.toLocaleLowerCase(); //Convers the filterBy string to lowercase 
        return this.products.filter((product:IProduct) => //iterates over each item in `this.products` array and applies a filtering condition
            product.productName.toLocaleLowerCase().includes(filterBy)); //converts the productName of each product to lowercase and checks if the productName contains the filterByString
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void { //fetching data from a service
       this.sub=this.productService.getProducts().subscribe({ 
            next: products => {
                this.products=products;
                this.filteredProducts=this.products;
            },
            error: err => this.errorMessage=err
        });
       
    }

    ngOnDestroy(){
       this.sub.unsubscribe();
    }

    onRatingClicked(message:string): void{
        this.pageTitle='Product List: ' + message;
    }
}