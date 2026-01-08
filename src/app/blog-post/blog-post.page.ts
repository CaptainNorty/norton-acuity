import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.page.html',
    styleUrl: './blog-post.page.scss',
    standalone: true,
    imports: [FooterComponent]
})

export class BlogPostPage implements OnInit {
    postId: string | null = null;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.postId = this.route.snapshot.paramMap.get('id');
    }
}
