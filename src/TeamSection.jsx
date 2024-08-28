import React from 'react';
import TeamMember from './TeamMember';

const TeamSection = () => {
  const teamMembers = [
    {
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA0gMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAYHBQj/xAA9EAABAwIEAggDBQYHAQAAAAABAAIDBBEFEiExBkEHEyJRYXGBoTKRsRQVI2LBM0JSctHwVIKSorLC4UT/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIEBQP/xAAhEQEBAQEAAgICAwEAAAAAAAAAAQIRAwQhMRJBIjJRE//aAAwDAQACEQMRAD8Av9gdxcJ4che6bjTrRqtIW1uqeASGhLAsUBloShsj3CACAIC6WBokoAjQsjQDZE6wBcSABuSdB5o/7ssg4x4kquIsVlw6imczDIHFl2mwncNC497b7Dbn3Ka1JPlrOfyvItuN9ImDYa8xUgkxCcXBEJswHxef0uq4/pGxuaTNDS0cEf8AC5rnkeZuPoFwYuHXGPs2uNtN11cOwV4ytdEA4+G65r55+nVn1b+3UoukatZIBX0FNKy+roHmNw8g64PsrhgnEOG440ihmImaO1BKMsjfT+l1RZ+GZXucQRc7eWigVGAS02WSJzmTM1a9jiC0+FtlZ55Psvrd+mtPY4P5W7+aItVW4I4lmxB78LxTWsiaXMlGnWgb3/MPdWt2q+8vflyazc3lMObqgRonCEkhaZMuCRlT9knLc+SCO8Js6W81JcDy3TPV2PrdBHe24UeZqmubYlRphoUEIg3QTmUokHdaLJ1oRNCdDdEUbU6AkNCdCAmhKRAIxdAaFkYCCICCBQFuaDicaYmcJ4Zr6lj8shj6uMj+N2g+qyPAIGxwRhrQLDTRX3pecTw1AGvFhWM6xoN/3XWv7KlYOfhbzsuXz6d3qZ+bVow9twAV3aWJoboNVxaCK1iCu/Tss0XXNmOvdqR1GZovbRcmvjAJA7l2mNuNDdcvEWEB3etbk4xi3qmTyfd2M0WIx6OgmBdbm0mzh6tJWsaO1bq3kVkvEDSI5Lc2kBatQtc2gpmvPaELA7zsF0+vruXL7eea6UQkkJ0hJXQ4yA1GGblKRhA0Wi6aewXUghNuHmgiPZqo0zN1Pc0lRpmoOflKCeLdUEHYjCeaE3GngijAShoiCMlAsIImowiBZGQgEaBJRtvcW3R2QG480V5+4kq6irxauklkcBUVjiY76WY6zR7JWZ0TAWVLoAO5upSuJaR1JjFXDOxweyd+W/cXXB9QQuxQYVDXQhskYIPeFw71/r1PHmc+HDOKYjCc1PiAlANiANR5j0KuHCmMVVfCWzduRov2eYSKfh51I10svUZMhbcRC7m2ta6ncG4bHBNUSMaGhws0eCxrUs+FmLPmq3juPYrDVvEVcYWZtBbYeKcpcYrHFrZ8XBLtGhrA9t+6+oVpq+G4sQjkMeRk1yDmYCHA7gpuk4XpqRgfLTQkxg5AIg0BXv8AFPx/k4GNEPpWuLhq5tzsNxdWzgueolxPEmTz9bGWRvYQbtG40/quDWQRSVcNM+Mvje4hzBuRZWvhCg+yQzvym2kbXHdwFzf3A9Fr1/7Hs8/52133BIKdTZGq7nlCalJOyNAEh2qUe9IO6BJZcKNOLKZfRRphdtjughHdElEIIOmwp5qjxnRPtQOBKASQUsIDQCARoAjRIwgF0Q3RlFZBW+LOF8NxaCorpYX/AGyOBxY6N5bmLQSLjms8wTExFGA4gX1W0AC9nC7Tv5LA6ildQVlRRvv1lNI5ljzAOnzC5vPn6dvreT7lWLF8ce+k/DaXNvZwb3KVgPFtA3N1sMkbgLZDufJViZ87HNDKUVEZ7nfD5garrUeF1GVs7cKgeWm7XNmta2uq+MxHTrXysFLjL6+J9Rh0EzOrJzCZpbmPcpLeI4qiAseMsltRtYrhjE6twfDFhNRHl3fGRk+ZNvdQp25iS5tnXuB3LOpZGs8t+Vh4eoY8axKeSeSVjYWgtMZGpPmCrzBBHTwsiibZjBYaqs9H0BZh9VUlukkoay/MNH9Tb0VoLje1l1+HMmY8/wBjd1vn6EUkhLsUl2i+znIKIIG6M7ICGpRFAIyLoEFMyp4gpmXZBELdUEZ3QQSoipLDooMLlJaUVIaU4mGG6cBQOBGkApV0CghdJBRohV0SA1Q5XQGFjPSPam40qS05c8cbz8rfotR4nx2l4dwiauq3tuGkRRk6yvto0fr4LK67CazHcNpsTMvW17og6W+gkvrp3Wvp4aLG52Pr47zXUaEyzwskpvjbq3w8F2KXEuIHCNjcNZJk2fcC6qdBWy4fM6Coa6NzDbtCxHmrDDxCWNFnM0/MuXmsu+bljvj7fKPtFfZjwNGDkuBXz56gMjvfv7gnanHJKoZQ8EkdlrDcrpcKcNVOLzGecOZTk2lktv8Alb48rqfjbVu+Tq8cORtiwGhijt2YW5h4nX56+66QCpPGVVNwpxLh+LU4JoaiMU1XCL2Ib8LgO8AnzsArlS1MFXTR1NLK2WGVuZj2m4cF3T6eZb29OFIKUU25yMhZCyJp5peiBA3QvZEd0klAbio0qce430UeVyBo7oJBdqiQLgcpbCoEDlMYbhFSWJ4KOwp5pQOBKSAUbnhjHOcQGtFyTyQKBRg3NlTMZ6SOH8NJZDJLXzAfDStBb6uJA+V1S8X6U8Zq8zMMp6ehZsJCOseB5mwHyKdGxVtbS4fSyVVdPHBTxi7pZDYBZnxB0ttaXwcPUZNhYVNToP8AKzc+tvJZxX4jiGJSmXEq2oq373mkLgPIbD0UB2a+myyvEnF8XxHGar7RilXLVTahpedGg8mgaD0Wr8CH7VwzSu07DTG4eWixxzSHLV+iSXrMNqoL/s5gbX5Eb/MFWK7GLcNU2J6TR3OzXjRw8iqXU8JPjq5YqaopKvqNXt6xrXMHiDpf+9FdeOK3EKfDZKbBgRUOH4swv+Gznl/MfZY9hMOad7JB2mk3zaknms6zK1nyaz9Np4N4IppKaGtrJ4p43C7IoHXZ6uG/otAZG2KNscTWsYzRrWjQBYz0fVeNYbVTy4VH9ow6G32ukBtcn95nIO09ea2OgrafEKZtRSvJY7kRYtPcRyKZzM/Sb3dfbPemV1qDDor3zSucR6LOuHOJ8U4Zleyic2SCQ5nU8ty0nvHcVdemiQ/eNBGCcnVkhZs4Zt9wts8azgvSThNcGxYjHJQT7FzzmjJ8HDUeoCuEMkc8YlgkjljOzmOBB+S85EG+tlLwzFK/CpxNh1VLTO5hjuy7zbsfVDj0JayBWd4L0mxZGxY9SSCT/EUwu0+bSbj0v5K34fxHg2JtvR4jTvNr5HOyuHobFE46RSHGwSz6Hy2SHA2RDRdzUeXXmnn6KPIgZO6JJJ1QQFCVOiOi5cbzdToX6WRU1pToKjNcn2FA6CqT0rY22iwEYZFIW1FecpA3EQ+L0O3qQrq1YBxpijsX4or6rrC+FsnVQ9wY3QW8yCfVKOO5tzfmhYDklX0CCjRJGia/dHmpFkyficD33CgaeFovQ2Q7GqqAn9pBmt35Tt/uv6LPnN7KtnRhVik4toMxIbI4xH/MD/4rBulZQw1EBY+JpBHdusH4gw1uFcVVMcNsvV9YWE2Ot9vkvQ7W3hI5rz/xbUsxHjXE3xaxw3pg4DQ5bg+5PySo0LoZYXYZicj4yxzqhujiL2yDuV9FFE2Z08LeqlPxOZpnHcRzWX9E2Iinxupw6Q2bVQ52fzs1I9QT/pWsDa6DHummZhx3D4W/EKYud6u0+hWflWzpXqBU8b1DWm4ggiiPgbZv+yqRVUgjVAi6IlGEAskyAHf3TiTJbM3VBsXRtiLq/hlkcshfLSyOhJJucu7fYqzv20WSdFGKGmx+aie49XWRk68nt1B9RmHyWsPeANEZph511UaUp+VyhSuRCCRdGmC7VBAiM6qZCQDoufC+6lxPRXRY48k81yiMenWuuUEHi3FTg/DWIV4+OOLLH4vccrfchefmHsanXxWq9MFcWYFS0QOtRUZnD8rQT9SPksoiN2kHdRYdLrNanAo0rsrW+Dk6HaIp26RKNn926UCj30OyAgLtT2GVMlFWRVEX7SGRsjLfxNNx9EzHoSw8kTbsnaUHp3EMTipeH6rFGO/CZTGdju8Zbg/Red8Hc+Rrpnn8R7i5xPMlaXVYn9o6E5LuJc2IUh1/MGj2IWcYa3JEPFRHd4cqTRcSYbViwyVDQ7yd2T7Fb445RmOzV5zY/I4SDeNwcPTVbrxDXik4Wra5rrZKRzw6/wCVWDBeI637x4hxKtzZhLUPLT4A2HsFzXIMGVgad7aoOVU3ubpWwuiADfiKRJI0aAqdDmZNSO7XkD+iJr/omS+5d8v7+adHR4Zrhh3EWHVTnWayoaHHwOh+q31/evNcoDmlp2IsvQWAYh944DQVhIL5YGF/81rO9wU6zUqXRQpjoVJlcSVDmKqI5OqCQSLo0EWGTRTYn6BcaGXRTYZdAg7Eb9k+165kUoPNSmyaIMw6W6zrsfpaQf8Az02Y+b3H9Gj5qlMuNQu1x3O6fjDFC43ySNjHgGsaPrdcZmrVGjdST1eumqVBJmYCmag6JqmflBHiorphycaVGa64BTzHKhT9HNf6HyQedQUre19k3sS3uQWiixXNwRiWEuJ7dZTzM8tc3uxv+pRYSGRhcZrssYd/Cp9PN1kY1UHSj7V78wrv0g48DwPguHsJ6yvgifJY/uNAP/K3pdUOI/iA9yd4mrTUvwqHQinw9o8iXOv7AfNUcoaonEHQ8t0TnZGElMl1teZVCnFvemnOA2RPddNFQOF4ALimA67R3nVNVL7AN70uIOOrigN2y2Douqev4VEZcHGGd7fIE3H1WRPb2StE6Hqjs4tSjZhilHmQ4f8AUIjQJTYKFM66lzXsoE37Q96rJk7oIidUEHAiee9TYnGw1RIIJsLip0TjYIIIMS4jcX8R4s52p+2Sf8ioMZ7JQQUaInaMhKhRntokFFToycg8080o0FQ60pM5tJERzuCgggXHqx4O2VO4a4mEfzIIKI6jSd+5cqB7pA+R7i5xcdT5oIKxRyOJcAdt0h50RoIhm5RE6IIII47VQAdk87TZGggAJI1V76HSfvPFhy6iE/7nIIKwaPMdFAdqSTuggjJk7oIIIP/Z',
      name: 'Samuel Chapman',
      title: 'CEO & Founder',
      description: 'Samuel is an IT leader running multiple enterprises for over 10 years. Seeing the bigger picture is his everyday CEO routine.',
      socialLinks: [
        { url: '#', iconClass: 'fab fa-twitter' },
        { url: '#', iconClass: 'fab fa-linkedin' },
        // Add more social links as needed
      ],
    },
    {
      image: 'https://t4.ftcdn.net/jpg/05/84/65/25/360_F_584652599_s89lyUhPSMfX5YsRlKsa1AglJT7vNioO.jpg',
      name: 'Stephen Rose',
      title: 'Senior Developer',
      description: 'Stephen is one of our Senior Developers who has over 10 years of experience in C#, C++, iOS and Android development.',
      socialLinks: [
        { url: '#', iconClass: 'fab fa-twitter' },
        { url: '#', iconClass: 'fab fa-linkedin' },
        // Add more social links as needed
      ],
    },
    {
      image: 'https://www.shutterstock.com/image-photo/young-confident-handsome-man-full-260nw-1416442523.jpg',
      name: 'Deborah Mitchell',
      title: 'HR Manager',
      description: 'Deborah is the heart of our HR department. She interviews new employees and manages the work of human resources.',
      socialLinks: [
        { url: '#', iconClass: 'fab fa-twitter' },
        { url: '#', iconClass: 'fab fa-linkedin' },
        // Add more social links as needed
      ],
    },
    {
      image: 'https://img.freepik.com/free-photo/close-up-photo-young-successful-business-man-black-suit_171337-9509.jpg',
      name: 'Danielle Gray',
      title: 'UI Designer',
      description: 'Improved usability and better interfaces are what Danielle specializes in. She has over 5 years of experience in UI and UX design.',
      socialLinks: [
        { url: '#', iconClass: 'fab fa-twitter' },
        { url: '#', iconClass: 'fab fa-linkedin' },
        // Add more social links as needed
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-3xl font-semibold text-center mb-12">Our Team</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            description={member.description}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
