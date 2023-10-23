import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private availableCategories = [
    'Articles',
    'Books',
    'Magazines',
    'Fairytales',
    'Technical Literature',
  ];
  private dataByCategory = new Map([
    ['Articles', { data: 'Articles: Some special text related to Articles. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' }],
    ['Books', { data: 'Books: Some special text related to Books. Tellus molestie nunc non blandit massa enim nec dui. Diam quis enim lobortis scelerisque fermentum. Proin gravida hendrerit lectus a. Tempus imperdiet nulla malesuada pellentesque elit. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Ornare suspendisse sed nisi lacus sed viverra tellus. In est ante in nibh mauris cursus mattis molestie. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. At imperdiet dui accumsan sit amet nulla facilisi morbi. Amet est placerat in egestas erat imperdiet sed. Rutrum quisque non tellus orci ac auctor augue mauris. Eu ultrices vitae auctor eu augue. Magna ac placerat vestibulum lectus mauris. Ut placerat orci nulla pellentesque dignissim. Eu facilisis sed odio morbi. Morbi tristique senectus et netus et malesuada fames ac turpis. Sed risus pretium quam vulputate dignissim suspendisse in est ante.' }],
    ['Magazines', { data: 'Magazines: Some special text related to Magazines. Quis imperdiet massa tincidunt nunc pulvinar sapien. Curabitur vitae nunc sed velit dignissim sodales. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Pretium lectus quam id leo. Varius morbi enim nunc faucibus a pellentesque. Tellus at urna condimentum mattis pellentesque. Elementum integer enim neque volutpat ac tincidunt vitae semper. Mi in nulla posuere sollicitudin aliquam. Nam libero justo laoreet sit. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Gravida in fermentum et sollicitudin ac orci. Augue interdum velit euismod in pellentesque massa. Sed tempus urna et pharetra. Eu augue ut lectus arcu bibendum at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Enim facilisis gravida neque convallis a cras semper. Tellus integer feugiat scelerisque varius. Amet consectetur adipiscing elit duis tristique.\n' +
        '\n' }],
    ['Fairytales', { data: 'Fairytales: Some special text related to Fairytales. Orci sagittis eu volutpat odio facilisis mauris sit amet. Etiam erat velit scelerisque in. Amet risus nullam eget felis eget nunc. Integer eget aliquet nibh praesent tristique magna. Tortor pretium viverra suspendisse potenti nullam ac. Tincidunt praesent semper feugiat nibh sed. Lacus sed turpis tincidunt id aliquet risus feugiat in. Eget mauris pharetra et ultrices neque. Nunc congue nisi vitae suscipit. Ut diam quam nulla porttitor massa. Id interdum velit laoreet id. Ac felis donec et odio pellentesque diam. Arcu non sodales neque sodales ut etiam sit. Fringilla ut morbi tincidunt augue interdum velit euismod in. Ac turpis egestas sed tempus urna et pharetra pharetra. Et sollicitudin ac orci phasellus egestas tellus rutrum.\n' +
        '\n' }],
    ['Technical Literature', { data: 'Technical Literature: Some special text related to Technical Literature. Iaculis urna id volutpat lacus laoreet. Tellus elementum sagittis vitae et leo duis. Sit amet aliquam id diam maecenas ultricies mi eget. Ut diam quam nulla porttitor massa id neque aliquam. Semper quis lectus nulla at volutpat diam. Ac odio tempor orci dapibus. Sodales ut eu sem integer vitae justo eget magna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Nibh cras pulvinar mattis nunc sed blandit libero. Ipsum consequat nisl vel pretium lectus.\n' +
        '\n' }],
  ]);

  loadCategories(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.availableCategories), 300);
    });
  }

  loadDataByCategory(category: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.dataByCategory.get(category)), 500);
    });
  }
}
