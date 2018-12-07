package javaSpring.Project.BookApi.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import javaSpring.Project.BookApi.models.Book;
import javaSpring.Project.BookApi.models.Comment;
import javaSpring.Project.BookApi.repositories.BookRepository;

@Service
public class BookService {
	private final BookRepository bookRepo;
	
	public BookService(BookRepository bookRepo) {
		this.bookRepo = bookRepo;
	}
	
	public List<Book> allBooks() {
		return bookRepo.findAll();
	}
	
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepo.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
	
	public Book createBook(Book b) {
		return bookRepo.save(b);
	}

	public List<Book> findBooksContainingAuthor(String author) {
		return bookRepo.findByAuthorContaining(author);
	}
	
	public List<Book> findBooksContainingTitle(String title) {
		return bookRepo.findByTitleContaining(title);
	}
}
