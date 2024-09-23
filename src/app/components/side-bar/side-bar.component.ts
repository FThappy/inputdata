import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout/layout.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  menuItems = [
    {
      icon: 'home',
      label: 'Trang Chủ',
      href: '/app',
    },
    {
      icon: 'people',
      label: 'Tài khoản',
      href: '/app/users',
    },
    {
      icon: 'collections_bookmark',
      label: 'Danh mục',
      href: '/list/teachers',
    },
    {
      icon: 'bookmarks',
      label: 'Khóa học',
      href: '/list/teachers',
    },
    {
      icon: 'code',
      label: 'Code',
      href: '/app/codes',
    },
    {
      icon: 'paid',
      label: 'Giao Dịch',
      href: '/list/students',
    },
    {
      icon: 'event',
      label: 'Sự Kiện',
      href: '/list/students',
    },
    {
      icon: 'notifications',
      label: 'Thông Báo',
      href: '/list/students',
    },
    {
      icon: 'question_answer',
      label: 'Tư vấn',
      href: '/list/students',
    },

    {
      icon: 'manage_accounts',
      label: 'Profile',
      href: '/profile',
    },
    {
      icon: 'settings',
      label: 'Cài Đặt',
      href: '/settings',
    },
  ];
  isOpen: any = true;

  constructor(private layoutService: LayoutService) {}
  ngOnInit(): void {
    // Lấy giá trị isOpen từ service khi component khởi tạo
    this.isOpen = this.layoutService.isOpen;
  }

  toggleSidebar(): void {
    this.isOpen = this.layoutService.toggleSidebar(); // Cập nhật giá trị isOpen sau khi toggle
  }
  // isOpen = true;

  // toggleSidebar() {
  //   this.isOpen = !this.isOpen;
  // }
}
