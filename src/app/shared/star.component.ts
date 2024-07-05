import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

//When both files are in the same folder we can use relative pathing 
@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating:number=0;
    cropWidth:number=75;
    @Output() ratingClicked:EventEmitter<string>=
        new EventEmitter<string>();
    ngOnChanges(): void{
        this.cropWidth=this.rating * 75/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}