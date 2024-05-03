import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'city-category-info',
  templateUrl: './category-info.component.html',
  styleUrl: './category-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryInfoComponent {

  categoryInfo :{title : string; desc: string, srcGif : string}[] = [
    {
      title : 'PLUMBING',
      desc : 'Lorem Ipsum is simply dummy text of the printing',
      srcGif : 'https://citypolymerbd.com/wp-content/uploads/2023/06/anim-icon1.gif'
    },
    {
      title : 'SEWERAGE & DRAINAGE',
      desc : 'Lorem Ipsum is simply dummy text of the printing',
      srcGif : 'https://citypolymerbd.com/wp-content/uploads/2023/06/anim-icon5.gif'
    },
    {
      title : 'AGRICULTURAL',
      desc : 'Lorem Ipsum is simply dummy text of the printing',
      srcGif : 'https://citypolymerbd.com/wp-content/uploads/2023/06/anim-icon3.gif'
    },
    {
      title : 'SURFACE DRAINAGE',
      desc : 'Lorem Ipsum is simply dummy text of the printing',
      srcGif : 'https://citypolymerbd.com/wp-content/uploads/2023/06/anim-icon4.gif'
    },
    {
      title : 'SEWERAGE & DRAINAGE',
      desc : 'Lorem Ipsum is simply dummy text of the printing',
      srcGif : 'https://citypolymerbd.com/wp-content/uploads/2023/06/anim-icon5.gif'
    },
    {
      title : 'AGRICULTURAL',
      desc : 'Lorem Ipsum is simply dummy text of the printing',
      srcGif : 'https://citypolymerbd.com/wp-content/uploads/2023/06/anim-icon3.gif'
    },
    {
      title : 'SURFACE DRAINAGE',
      desc : 'Lorem Ipsum is simply dummy text of the printing',
      srcGif : 'https://citypolymerbd.com/wp-content/uploads/2023/06/anim-icon4.gif'
    }
  ]
}
