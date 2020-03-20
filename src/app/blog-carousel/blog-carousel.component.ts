import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service';
@Component({
  selector: 'app-blog-carousel',
  templateUrl: './blog-carousel.component.html',
  styleUrls: ['./blog-carousel.component.scss']
})
export class BlogCarouselComponent implements OnInit {

  carouselOptions = {
    margin: 25,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: false,
        loop: false
      },
      1500: {
        items: 4,
        nav: false,
        loop: false
      }
    }
  };
  blogPosts;

  constructor(public blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getAllBlogs().subscribe(blogs => {
      this.blogPosts = blogs;
    });
  }

}
