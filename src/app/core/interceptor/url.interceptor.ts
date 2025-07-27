import { HttpInterceptorFn } from '@angular/common/http';

export const urlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl:string=`https://fakestoreapi.com/`;
  
  const newRequest = req.clone({
    url: baseUrl + req.url,
  });

  return next(newRequest);
};
