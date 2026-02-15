// Gallery.js - Enhanced Image Gallery for SRL-LOGIX
class SRLGallery {
    constructor(options = {}) {
        this.options = {
            container: '#galleryGrid',
            modal: '#imageModal',
            images: [],
            lazyLoad: true,
            itemsPerPage: 12,
            showCaptions: true,
            enableLightbox: true,
            ...options
        };
        
        this.currentIndex = 0;
        this.loadedImages = new Set();
        this.init();
    }

    init() {
        this.container = document.querySelector(this.options.container);
        this.modal = document.querySelector(this.options.modal);
        
        if (!this.container) {
            console.warn('Gallery container not found');
            return;
        }

        this.setupGallery();
        this.bindEvents();
        this.initializeLazyLoading();
    }

    setupGallery() {
        if (!this.options.images.length) {
            // Default images if none provided
            this.options.images = this.getDefaultImages();
        }

        this.renderGallery();
    }

    getDefaultImages() {
        return [
            {
                src: 'images/00af5679-1741-4a49-b23f-1e1f6f7a4f5d.JPG',
                alt: 'Logistics Operations - Warehouse Management',
                title: 'Warehouse Operations',
                category: 'operations'
            },
            {
                src: 'images/0e5bdb18-e9ac-4211-a34a-aff9fd0db1ae.JPG',
                alt: 'Freight Forwarding Services',
                title: 'Freight Forwarding',
                category: 'freight'
            },
            {
                src: 'images/0eff993d-47ec-4969-83ab-cea8297d50d8.JPG',
                alt: 'Customs Clearance Process',
                title: 'Customs Clearance',
                category: 'customs'
            },
            {
                src: 'images/1db9c205-cf8c-4744-b651-6d72ffffa757.JPG',
                alt: 'International Shipping Container',
                title: 'Global Shipping',
                category: 'shipping'
            },
            {
                src: 'images/2905ee09-cf69-4f5c-a370-43ccd83eaf0b.JPG',
                alt: 'Transportation Network',
                title: 'Transport Network',
                category: 'transport'
            },
            {
                src: 'images/3121d6d2-dfbd-46a8-b452-5b9220b603ee.JPG',
                alt: 'Cargo Handling Operations',
                title: 'Cargo Handling',
                category: 'operations'
            },
            {
                src: 'images/4336a470-be86-4826-bd98-f4db2ea26b3d.JPG',
                alt: 'International Trade Documentation',
                title: 'Documentation',
                category: 'documentation'
            },
            {
                src: 'images/4bb14c84-9b0d-4c50-ab25-233de6d9bb19.JPG',
                alt: 'Supply Chain Optimization',
                title: 'Supply Chain',
                category: 'supply-chain'
            },
            {
                src: 'images/5797300a-0261-457f-a9f2-d35336faeac6.JPG',
                alt: 'Freight Management System',
                title: 'Freight Management',
                category: 'management'
            },
            {
                src: 'images/67987907-e4c5-4ce4-a42b-3188806066d4.JPG',
                alt: 'Logistics Infrastructure',
                title: 'Infrastructure',
                category: 'infrastructure'
            },
            {
                src: 'images/8067bc2c-29aa-40fc-849a-f95c63603dc0.JPG',
                alt: 'Warehouse Storage Solutions',
                title: 'Storage Solutions',
                category: 'operations'
            },
            {
                src: 'images/dcdfc4ab-aad7-40ab-a1cc-8f8a2b052e9a.JPG',
                alt: 'Distribution Center Operations',
                title: 'Distribution Center',
                category: 'distribution'
            }
        ];
    }

    renderGallery() {
        if (!this.container) return;

        const imagesToShow = this.options.images.slice(0, this.options.itemsPerPage);
        
        this.container.innerHTML = '';
        
        imagesToShow.forEach((image, index) => {
            const galleryItem = this.createGalleryItem(image, index);
            this.container.appendChild(galleryItem);
        });
    }

    createGalleryItem(image, index) {
        const item = document.createElement('div');
        item.className = 'col-md-6 col-lg-4 gallery-item-wrapper';
        item.innerHTML = `
            <div class="gallery-item position-relative overflow-hidden rounded-4 shadow-sm" 
                 style="cursor: pointer; height: 250px;" 
                 data-index="${index}">
                ${this.options.lazyLoad ? 
                    `<img data-src="${image.src}" 
                          alt="${image.alt}" 
                          class="img-fluid w-100 h-100 gallery-lazy" 
                          style="object-fit: cover; opacity: 0; transition: opacity 0.3s;">` :
                    `<img src="${image.src}" 
                          alt="${image.alt}" 
                          class="img-fluid w-100 h-100" 
                          style="object-fit: cover;">`
                }
                <div class="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
                     style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)); opacity: 0; transition: opacity 0.3s;">
                    <div class="text-center text-white">
                        <i class="bi bi-zoom-in fs-1 mb-2"></i>
                        ${this.options.showCaptions ? `<p class="mb-0 fw-bold">${image.title}</p>` : ''}
                    </div>
                </div>
                <div class="gallery-loading position-absolute top-50 start-50 translate-middle">
                    <div class="spinner-border text-light" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        `;

        // Add hover effects
        const galleryElement = item.querySelector('.gallery-item');
        const overlay = item.querySelector('.gallery-overlay');
        
        galleryElement.addEventListener('mouseenter', () => {
            overlay.style.opacity = '1';
        });
        
        galleryElement.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0';
        });

        // Add click event for lightbox
        if (this.options.enableLightbox) {
            galleryElement.addEventListener('click', () => {
                this.openLightbox(index);
            });
        }

        return item;
    }

    openLightbox(index) {
        this.currentIndex = index;
        const image = this.options.images[index];
        
        if (!this.modal) {
            this.createModal();
        }
        
        const modalImage = document.querySelector('#modalImage');
        const modalTitle = document.querySelector('#imageModalTitle');
        
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalTitle.textContent = image.title;
        
        const bootstrapModal = new bootstrap.Modal(this.modal);
        bootstrapModal.show();
    }

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.id = 'imageModal';
        modal.tabIndex = '-1';
        modal.innerHTML = `
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content bg-transparent border-0">
                    <div class="modal-header border-0">
                        <h5 class="modal-title text-white" id="imageModalTitle">Image</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body p-0">
                        <img id="modalImage" src="" alt="" class="img-fluid">
                    </div>
                    <div class="modal-footer border-0 justify-content-center">
                        <button type="button" class="btn btn-outline-light" id="prevImage">
                            <i class="bi bi-chevron-left"></i> Previous
                        </button>
                        <button type="button" class="btn btn-outline-light" id="nextImage">
                            Next <i class="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        this.modal = modal;
        
        // Bind navigation events
        document.getElementById('prevImage').addEventListener('click', () => this.navigateImage(-1));
        document.getElementById('nextImage').addEventListener('click', () => this.navigateImage(1));
    }

    navigateImage(direction) {
        this.currentIndex += direction;
        
        if (this.currentIndex < 0) {
            this.currentIndex = this.options.images.length - 1;
        } else if (this.currentIndex >= this.options.images.length) {
            this.currentIndex = 0;
        }
        
        const image = this.options.images[this.currentIndex];
        const modalImage = document.querySelector('#modalImage');
        const modalTitle = document.querySelector('#imageModalTitle');
        
        // Add fade effect
        modalImage.style.opacity = '0';
        
        setTimeout(() => {
            modalImage.src = image.src;
            modalImage.alt = image.alt;
            modalTitle.textContent = image.title;
            modalImage.style.opacity = '1';
        }, 200);
    }

    initializeLazyLoading() {
        if (!this.options.lazyLoad) return;

        const lazyImages = document.querySelectorAll('.gallery-lazy');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const loading = img.parentElement.querySelector('.gallery-loading');
                    
                    img.src = img.dataset.src;
                    img.onload = () => {
                        img.style.opacity = '1';
                        if (loading) loading.style.display = 'none';
                    };
                    
                    observer.unobserve(img);
                    this.loadedImages.add(img.src);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    bindEvents() {
        // Keyboard navigation for lightbox
        document.addEventListener('keydown', (e) => {
            if (!this.modal || !this.modal.classList.contains('show')) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    this.navigateImage(-1);
                    break;
                case 'ArrowRight':
                    this.navigateImage(1);
                    break;
                case 'Escape':
                    bootstrap.Modal.getInstance(this.modal).hide();
                    break;
            }
        });

        // Touch gestures for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.navigateImage(1); // Swipe left - next image
                } else {
                    this.navigateImage(-1); // Swipe right - previous image
                }
            }
        };

        this.handleSwipe = handleSwipe;
    }

    // Public methods
    addImages(images) {
        this.options.images.push(...images);
        this.renderGallery();
    }

    filterByCategory(category) {
        const filtered = category === 'all' ? 
            this.getDefaultImages() : 
            this.getDefaultImages().filter(img => img.category === category);
        
        this.options.images = filtered;
        this.renderGallery();
    }

    refresh() {
        this.renderGallery();
        this.initializeLazyLoading();
    }
}

// Auto-initialize gallery when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check if gallery container exists
    const galleryContainer = document.querySelector('#galleryGrid');
    if (galleryContainer) {
        window.srlGallery = new SRLGallery({
            container: '#galleryGrid',
            modal: '#imageModal',
            lazyLoad: true,
            itemsPerPage: 12,
            showCaptions: true,
            enableLightbox: true
        });
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SRLGallery;
}
