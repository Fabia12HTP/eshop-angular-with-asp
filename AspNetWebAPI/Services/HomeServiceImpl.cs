using E_Shop.DTOs;
using System.Web;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System;
using AspNetCoreAPI.Data;
using AspNetCoreAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace E_Shop.Services
{
    public class HomeServiceImpl : IHomeService
    {
        private readonly ApplicationDbContext _context;

        public HomeServiceImpl(ApplicationDbContext context)
        {
            _context = context;
        }

    public IEnumerable<ShoesDTO> GetShoes()
        {
            return _context.Shoes.Select(shoe => new ShoesDTO
            {
                Id = shoe.Id,
                Name = shoe.Name,
                Description = shoe.Description,
                Price = shoe.Price,
                Rating = shoe.Rating,
                UrlPicture = FormatUrl(shoe.UrlPicture),
                State = shoe.State,
                Like = shoe.Like
            }); ;
        }

        private static string? FormatUrl(string? url)
        {
            if (url != null)
            {
                return url.Replace("\\", "/");
            }
            return url;
        }

        [HttpGet]
        [Route("")]
        public ShoesDTO GetShoesDetail(int id)
        {
            var shoe = _context.Shoes.Where(x => x.Id == id).Single<mShoes>();
            var shoesToReturn = new ShoesDTO()
            {
                Name = shoe.Name,
                Description = shoe.Description,
                Price = shoe.Price,
                Rating = shoe.Rating,
                UrlPicture = shoe.UrlPicture,
                Like = shoe.Like,
            };
            return shoesToReturn;
        }
    }
}
