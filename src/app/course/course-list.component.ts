import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html' 
})
export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular Course - DIO',
                imageUrl: '/assets/images/forms.png',
                price: 99.99, 
                code: 'xps99-26',
                duration: 120,
                rating: 5.0, 
                releaseDate: 'December 12, 2021'  
            },
            {
                id: 2,
                name: 'Java Course - DIO',
                imageUrl: '/assets/images/http.png',
                price: 100.00,
                code: 'xps99-25',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December 15, 2021'
            }
        ]
    }
}